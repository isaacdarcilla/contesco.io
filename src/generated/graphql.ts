import { GraphQLClient } from "graphql-request";
import { GraphQLClientRequestHeaders } from "graphql-request/build/cjs/types";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Event = {
  __typename?: "Event";
  category: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  organizer: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  getEvents?: Maybe<Array<Event>>;
};

export type QueryGetEventsArgs = {
  column?: InputMaybe<Scalars["String"]["input"]>;
  direction?: InputMaybe<Scalars["String"]["input"]>;
};

export type GetEventsQueryVariables = Exact<{ [key: string]: never }>;

export type GetEventsQuery = {
  length: any;
  __typename?: "Query";
  getEvents?: Array<{
    __typename?: "Event";
    id: string;
    name: string;
    description: string;
  }> | null;
};

export const GetEventsDocument = gql`
  query getEvents {
    getEvents {
      id
      name
      description
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getEvents(
      variables?: GetEventsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetEventsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetEventsQuery>(GetEventsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getEvents",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
