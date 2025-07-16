import { z } from "zod";

export const OutreachFormSchema = z.object({
	name: z.string().nonempty("Name must contain at least 1 character.").max(50),
	email: z.string().email().nonempty().max(50),
	company: z.string().nonempty("Company must contain at least 1 character.").max(50),
	notes: z.string().nonempty("Additional notes must contain at least 1 character.").max(200),
	cftoken: z.string().nonempty(),

	sponsor: z.boolean().default(false),
	donate: z.boolean().default(false),
	recruit: z.boolean().default(false),
	outreach: z.boolean().default(false),
	other: z.boolean().default(false)
});
