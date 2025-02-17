import { ConceptApi } from "@/app/_entities/concept/api/concept.api";
import { GetConceptListRequest } from "@/app/_entities/concept/get-concept-list.request";
import { IResponse } from "@/app/_shared/api/api.types";
import { GetConceptSharedDto } from "@/app/_shared/api/generate.api.types";
import { API_PATHS } from "@/app/_shared/constants/api.path.const";

export class ConceptApiFeature extends ConceptApi {
    // 개념 목록
    async fetchConceptList(
        getConceptListRequest?: GetConceptListRequest,
    ): Promise<IResponse<GetConceptSharedDto[]>> {
        return this.request<GetConceptSharedDto[]>(
            API_PATHS.CONCEPT.LIST,
            {
                method: "GET",
                queryString:
                    getConceptListRequest as Record<
                        string,
                        string
                    >,
            },
        );
    }

    // 개념 상세
    async fetchConceptByUrl(
        url: string,
    ): Promise<IResponse<GetConceptSharedDto>> {
        return this.request<GetConceptSharedDto>(
            `${API_PATHS.CONCEPT.DETAIL}/${url}`,
            {
                method: "GET",
            },
        );
    }
}

export const conceptApi = new ConceptApiFeature();
