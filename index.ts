import { S } from "ts-toolbelt";
import { Equal, Expect } from "./type-utils.ts";


type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<Path> = Path extends ;

type tests = [
    Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
    Expect<
        Equal<
            ExtractPathParams<UserOrganisationPath>,
            { id: string; organisationId: string }
        >
    >
];
