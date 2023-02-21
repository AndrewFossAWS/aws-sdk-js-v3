// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSolNetworkPackagesCommand,
  ListSolNetworkPackagesCommandInput,
  ListSolNetworkPackagesCommandOutput,
} from "../commands/ListSolNetworkPackagesCommand";
import { Tnb } from "../Tnb";
import { TnbClient } from "../TnbClient";
import { TnbPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TnbClient,
  input: ListSolNetworkPackagesCommandInput,
  ...args: any
): Promise<ListSolNetworkPackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSolNetworkPackagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Tnb,
  input: ListSolNetworkPackagesCommandInput,
  ...args: any
): Promise<ListSolNetworkPackagesCommandOutput> => {
  // @ts-ignore
  return await client.listSolNetworkPackages(input, ...args);
};
export async function* paginateListSolNetworkPackages(
  config: TnbPaginationConfiguration,
  input: ListSolNetworkPackagesCommandInput,
  ...additionalArguments: any
): Paginator<ListSolNetworkPackagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSolNetworkPackagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Tnb) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TnbClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Tnb | TnbClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
