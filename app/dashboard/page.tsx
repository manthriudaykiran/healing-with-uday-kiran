// Middleware intercepts this route and redirects to TagMango.
// Kept as a placeholder for the future internal dashboard module.
import { redirect } from "next/navigation";
import { TAGMANGO_URL } from "@/modules/tagmango/redirect";

export default function DashboardPage() {
  redirect(TAGMANGO_URL);
}
