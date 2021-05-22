/**
 * Componente para sinalizar qual é a página ativa
 */

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
/**
 * O "cloneElement", nós podemos clonar um elemento react e alterar coisas nele
 *
 * ReactElement é um componente que não aceita nós como filho, apenas outro único elemento e deve ser um comp React
 *    <Elem1>Texto</Elem1>
 *
 * ReactNode é um componente que aceita nós como filho
 *    <Elem1><Elem2>Texto</Elem2></Elem1>
 */
import { cloneElement, ReactElement } from 'react';

type ActiveLinkProps = {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
} & LinkProps;

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...rest
}: ActiveLinkProps) {
  // Rota ativa
  const { asPath } = useRouter();
  let isActive = false;

  // Se o link ativo for igual ao rest.href, o activeClassName é passado para o <a>
  if ((shouldMatchExactHref && asPath === rest.href) || asPath === rest.as) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  );
}
