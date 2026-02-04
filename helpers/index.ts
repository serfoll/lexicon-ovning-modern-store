import nextConfig from "@/next.config";
import { log } from "console";

export const formatUrl = (urlStr: string): URL =>
  new URL(urlStr.replace(/[\[\]\"]/g, ""));

export const checkHostname = (url: URL): { url: string; inConfig: boolean } => {
  // check if host name is in the next.config.ts file
  const isInConfig = nextConfig.images?.remotePatterns?.find((pat) =>
    pat.hostname.includes(url.hostname),
  );

  // return url and isInConfig
  return { url: url.toString(), inConfig: isInConfig !== undefined };
};
