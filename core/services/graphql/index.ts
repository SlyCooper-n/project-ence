import { GraphQLClient } from "graphql-request";

export const hygraph = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/cl6l5c9q60f0501tb57ll9xsz/master"
);

export * from "./queries";
