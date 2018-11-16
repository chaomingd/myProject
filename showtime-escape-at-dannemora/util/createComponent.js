function generateRuntimeDeclare(ifNeed) {
  if (ifNeed) {
    return 'let runtimeObj;';
  }

  return '';
}

function generateRuntimeImport(ifNeed) {
  if (ifNeed) {
    return `    System
    .import('./_runtime.js')
    .then((runtime) => { runtimeObj = runtime; });`;
  }

  return '';
}

const fs = require('fs');
const path = require('path');

const name = process.argv[2];
const needRuntime = process.argv[3] === 'runtime';

const dirPath = `src/components/${name}`;

const jsPath = path.join(dirPath, 'index.js');
const jsContent = `import ${name} from './${name}';
export default ${name};
`;

const scssPath = path.join(dirPath, `${name}.scss`);
const scssContent = `.${name} {

}

`;

const runtimePath = path.join(dirPath, '_runtime.js');
const runtimeContent = `export default {
  // doSth() {
  //   console.log('aaaaa');
  // },
};
`;

const jsxPath = path.join(dirPath, `${name}.jsx`);
const jsxContent = `import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './${name}.scss';

${generateRuntimeDeclare(needRuntime)}

class ${name} extends Component {
  componentDidMount() {
${generateRuntimeImport(needRuntime)}
  }

  render() {
    return (
      <div
        className={classnames(
          scss.${name},
          this.props.className,
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

${name}.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

${name}.defaultProps = {
  className: undefined,
};

export default ${name};
`;

if (fs.existsSync(dirPath)) {
  console.log('========== folder exist ==========');
} else {
  fs.mkdirSync(dirPath);

  fs.writeFileSync(jsPath, jsContent);
  fs.writeFileSync(scssPath, scssContent);
  fs.writeFileSync(jsxPath, jsxContent);

  if (needRuntime) {
    fs.writeFileSync(runtimePath, runtimeContent);
  }
}
