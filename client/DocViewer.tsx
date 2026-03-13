import './css/viewer.css'
import React, {ReactElement, useEffect} from "react";

function extractDocIndex(xml: Document, level: number = 2): string {
  let idx: string = "<div>";

  const nodes: HTMLCollection = xml.children[0].children;
  for (let index in nodes) {
    let node: Element = nodes[index];
    let tag: string = node.tagName;
    let id: string = node.id;
    let text: string = node.textContent;
    if (tag && tag.length === 2 && tag.startsWith("h")) {
      let depth: number = +tag.charAt(1);
      //console.log(tag + "#" + id + "=" + text);
      if (depth <= level) {
        if (id) idx += "<a href=\"#" + id + "\">";
        idx += "<h" + depth + ">";
        idx += text;
        idx += "</h" + depth + ">";
        if (id) idx += "</a>";
        idx += "\n"
      }
    }
  }
  idx += "</div>";

  return idx;
}

export default function DocViewer(props: any): ReactElement<any, any> {

  const [docIndex, setDocIndex] = React.useState('');
  const [docContent, setDocContent] = React.useState('');

  useEffect((): void => {
    // Load the viewer content
    fetch(props.doc).then((response) => {
      response.text().then((text) => {
        const xml = new DOMParser().parseFromString(text, "text/xml");
        setDocIndex(extractDocIndex(xml, props.outline));
        setDocContent(text);
        //setState({docContent: text, docIndex: this.extractDocIndex(xml, this.props.outline)});
      })
    })
  }, [])

  return (
    <div className='content'>
      <div className='doc-view'>
        <div className='doc-index' dangerouslySetInnerHTML={{__html: docIndex}}/>
        <div className='doc-content' dangerouslySetInnerHTML={{__html: docContent}}/>
      </div>
    </div>
  )

}
