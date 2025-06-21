import { schema } from "~/shared/OutreachFormSchema";
import { $fetch } from "ofetch";
export default defineEventHandler(async (event) => {
	let config = useRuntimeConfig(event);
	let result = await readValidatedBody(event, (body) =>
		schema
			.refine(
				(data) => data.sponsor || data.donate || data.recruit || data.outreach || data.other,
				{
					message: "Please select at least one reason for contact.",
					path: ["checkboxes"]
				}
			)
			.safeParse(body)
	);
	if (!result.success) {
		setResponseStatus(event, 400);
		console.log(result.error.issues);
		return result.error.issues;
	}
	let captcha = await $fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
		method: "POST",
		body: {
			secret: config.turnstileSecret,
			response: result.data.cftoken
		}
	});
	if (!captcha.success) {
		setResponseStatus(event, 403);
		return {
			message:
				"Unfortunately our system has detected you as a bot. Please refresh your page or reach out via email."
		};
	}
	// const payload = {
	// 	message: formatResult(result.data),
	// 	email: result.data.email
	// };
	// const response = await $fetch(config.emailEndPoint, {
	// 	method: "POST",
	// 	headers: {
	// 		"X-Access-Token": config.emailSecret + "afafa",
	// 		"Content-Type": "application/json"
	// 	},
	// 	body: payload
	// });
	// if (!response.success) {
	// 	setResponseStatus(event, 500);
	// 	return {
	// 		success: false,
	// 		message:
	// 			"Unfortunately there was an internal error on our end. Please reach out via uwrobots@uw.edu or try again later."
	// 	};
	// }
	return { success: true, message: "Your message has been sent!" };
});

function formatResult(result: {
	name: string;
	email: string;
	company: string;
	notes: string;
	sponsor: boolean;
	donate: boolean;
	recruit: boolean;
	outreach: boolean;
	other: boolean;
}) {
	return [
		`New Outreach Form Submission From The Husky Robotics Website\n`,
		`Name: ${result.name}`,
		`Email: ${result.email}`,
		`Company: ${result.company}`,
		`Notes: ${result.notes}`,
		"",
		`${result.sponsor ? "[X]" : "[ ]"} Monetary Sponsorship  (Tax Deductible)`,
		`${result.donate ? "[X]" : "[ ]"} Donate Equipment / Software`,
		`${result.recruit ? "[X]" : "[ ]"} Recruit Top University of Washington Talent`,
		`${result.outreach ? "[X]" : "[ ]"} Visibility & Public Outreach Opportunities`,
		`${result.other ? "[X]" : "[ ]"} Other or N/A  (Fill out Additional Notes)`,
		`\nThis is an automated message.`
	].join("\n");
}
