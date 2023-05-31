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
  DateTime: { input: any; output: any };
};

export type CreateEventInput = {
  category: Scalars["String"]["input"];
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  organizer: Scalars["String"]["input"];
};

export type Event = {
  __typename?: "Event";
  banner?: Maybe<Scalars["String"]["output"]>;
  category: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  eventEnds?: Maybe<Scalars["String"]["output"]>;
  eventStarts?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  organizer: Scalars["String"]["output"];
  slug?: Maybe<Scalars["String"]["output"]>;
  tags?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createEvent: Scalars["String"]["output"];
};

export type MutationCreateEventArgs = {
  input: CreateEventInput;
};

export type Query = {
  __typename?: "Query";
  getEventById?: Maybe<Array<Event>>;
  getEvents?: Maybe<Array<Event>>;
};

export type QueryGetEventByIdArgs = {
  eventId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryGetEventsArgs = {
  column?: InputMaybe<Scalars["String"]["input"]>;
  direction?: InputMaybe<Scalars["String"]["input"]>;
};

export type GetEventsQueryVariables = Exact<{ [key: string]: never }>;

export type GetEventsQuery = {
  __typename?: "Query";
  getEvents?: Array<{
    __typename?: "Event";
    id: string;
    name: string;
    description: string;
  }> | null;
};

export type GetEventByIdQueryVariables = Exact<{
  eventId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetEventByIdQuery = {
  __typename?: "Query";
  getEventById?: Array<{
    __typename?: "Event";
    id: string;
    name: string;
    description: string;
    organizer: string;
    type?: string | null;
    category: string;
    tags?: string | null;
    banner?: string | null;
    slug?: string | null;
    eventStarts?: string | null;
    eventEnds?: string | null;
    createdAt: any;
    updatedAt: any;
  }> | null;
};

export type CreateEventMutationVariables = Exact<{
  input: CreateEventInput;
}>;

export type CreateEventMutation = {
  __typename?: "Mutation";
  createEvent: string;
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
export const GetEventByIdDocument = gql`
  query getEventById($eventId: String) {
    getEventById(eventId: $eventId) {
      id
      name
      description
      organizer
      type
      category
      tags
      banner
      slug
      eventStarts
      eventEnds
      createdAt
      updatedAt
    }
  }
`;
export const CreateEventDocument = gql`
  mutation createEvent($input: CreateEventInput!) {
    createEvent(input: $input)
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
    getEventById(
      variables?: GetEventByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetEventByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetEventByIdQuery>(GetEventByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getEventById",
        "query"
      );
    },
    createEvent(
      variables: CreateEventMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<CreateEventMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateEventMutation>(CreateEventDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "createEvent",
        "mutation"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
