import { getLandingPageData } from "@/app/lib/landing-page";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await getLandingPageData();

  return Response.json(
    { data: result, status: 200 },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
