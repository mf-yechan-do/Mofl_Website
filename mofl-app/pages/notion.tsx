import { NotionAPI } from 'notion-client';
import Link from 'next/link';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// used for collection views (optional)
import 'rc-dropdown/assets/index.css'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import React from 'react';
import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x'
import Top from "../component/top";

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const recordMap = await notion.getPage("e9b85447e6e14000b492dc84384bbb3b")

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}


export default ({ recordMap }) => (  
<div><Top />
<NotionRenderer
  components={{
    pageLink: ({
      href,
      as,
      passHref,
      prefetch,
      replace,
      scroll,
      shallow,
      locale,
      ...props
      }) => (
      <Link
      href={`https://www.notion.so${href}`}
      as={as}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      >
      <a {...props}/>
      </Link>
      ),
    collection: Collection,
    collectionRow: CollectionRow,
  }}
  recordMap={recordMap}
  fullPage={true}
  darkMode={false}  
/></div>
)
