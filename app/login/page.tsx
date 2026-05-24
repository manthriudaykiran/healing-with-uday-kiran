// Middleware intercepts this route and redirects to TagMango.
// Kept as a SSR fallback in case middleware is bypassed.
import { redirect } from "next/navigation";
import { TAGMANGO_URL } from "@/modules/tagmango/redirect";

export default function LoginPage() {
  redirect(TAGMANGO_URL);
}
