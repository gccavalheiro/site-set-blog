'use client'
import React from "react";

type UseClipboarProps = {
  timeout?: number;
};

export function useClipboar(props: UseClipboarProps) {
  const { timeout } = props;
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  const handleCopy = React.useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.error("Clipboard não suportado");
      return false;
    }

    try {
      const textCopied = await navigator.clipboard.writeText(text);

      console.log("1111", textCopied);
      setIsCopied(true);
    } catch (error) {
      console.log("Falha ao copiar o texto.", error);
      setIsCopied(false);
      return false;
    }
  }, []);

  React.useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      console.log(timer, timeout);
      return () => clearTimeout(timer);
    }
  }, [isCopied, timeout]);

  return React.useMemo(
    () => ({ isCopied, handleCopy }),
    [isCopied, handleCopy]
  );
}
