import { roadmapAPI } from "@/app/_features/roadmap/api/roadmap.api.feature";
import Roadmap from "@/app/_features/roadmap/ui/roadmap";
import { SearchParams } from "@/app/_shared/types/search-params.type";
import { Chip } from "@nextui-org/chip";
import { Link } from "next-view-transitions";
import React from "react";

async function Page({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const sp = await searchParams;

    // 목록
    const listResponse = await roadmapAPI.fetchRoadmap();

    // 상세
    const response = await roadmapAPI.fetchRoadmapByTitle(
        (sp.field as string) ?? "Front-End",
    );

    return (
        <div
            className={
                "w-full flex flex-col justify-center items-center"
            }
        >
            {/*필터*/}
            <section className={"flex flex-wrap gap-2"}>
                {listResponse.data.map((roadmap) => (
                    <Link
                        key={roadmap._id}
                        href={`/roadmap?field=${roadmap.title}`}
                    >
                        <Chip>{roadmap.title}</Chip>
                    </Link>
                ))}
            </section>
            {/*로드맵*/}
            <Roadmap roadmap={response.data} />
        </div>
    );
}

export default Page;
