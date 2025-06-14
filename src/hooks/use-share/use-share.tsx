import React from "react";
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from "./social-provider";
import { useClipboar } from "../use-clipboard";
import { Link, Link2 } from "lucide-react";

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export function useShare(props: UseShareProps) {
  const { clipboardTimeout = 2000, text, title, url } = props;

  const { isCopied, handleCopy } = useClipboar({ timeout: clipboardTimeout });

  const shareConfig = React.useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [text, title, url]
  );

  const share = React.useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === "clipboard") {
          console.log("123", url);
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];

        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600,height=600location=yes,status=yes"
        );

        return !!shareWindow;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    [shareConfig, handleCopy, url]
  );

  const shareButtons = React.useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: "clipboard",
        name: isCopied ? "Link copiado" : "Copiar link",
        icon: isCopied? <Link2/> : <Link className="h-4 w-4"/>,
        action: () => share("clipboard"),
      },
    ],
    [share, isCopied]
  );

  return React.useMemo(
    () => ({
      shareButtons,
    }),
    [shareButtons]
  );
}
