import { NotionAPI } from 'notion-client';
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


export default ({ recordMap }) => (  <NotionRenderer
  recordMap={recordMap}
  fullPage={true}
  darkMode={false}
  rootDomain='localhost:9090' // used to detect root domain links and open this in the same tab
  components={{
    collection: Collection,
    collectionRow: CollectionRow,
  }}  
/>
)
