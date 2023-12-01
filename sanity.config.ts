/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
	title: "blog-nj",
	basePath: "/admin",
	projectId: "y33fkzpi",
	dataset: "production",
	apiVersion: "2023-11-28",
	useCdn: true,
	// Add and edit the content schema in the './sanity/schema' folder

	plugins: [
		deskTool(),

		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
	],
	schema: { types: schemas },
});
