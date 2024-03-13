import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AuthorizedUserHomePage from "../../components/AuthorizedUserHomePage";

export default async function UserHome() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }

  const { data: clients } = await supabase.from("clients").select("*");
  const { data: products } = await supabase.from("products").select("*");
  const { data: individual_price } = await supabase
    .from("individual_price")
    .select("*");

  const data = { clients, products, individual_price };
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <div></div>
            <AuthButton />
          </div>
        </nav>
      </div>

      <AuthorizedUserHomePage data={data} />
    </div>
  );
}
