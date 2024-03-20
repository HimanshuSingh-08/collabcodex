import CodeMirror from "codemirror";
import { useEffect } from "react";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';


// text/x-c++src

export default function Editor() {
  useEffect(() => {
    const textarea = document.getElementById('realTimeEditor');
    const codeMirrorInstance = CodeMirror.fromTextArea(textarea, {
      mode: { name: 'javascript', json: true },
      theme: 'dracula',
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    });

    return () => {
      codeMirrorInstance.toTextArea(); // Destroying CodeMirror instance on unmount
    };
  }, []);

  return (
    <textarea id="realTimeEditor" />
  );
}
