





Forma de resolver conflito de segurança informado pelo npm audit:

1) add resolutions section

"resolutions": {
  "trim-newlines": "^4.0.2"
}

2) run

rm -r node_modules
npx npm-force-resolutions
npm install
