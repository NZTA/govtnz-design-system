// @autogenerated


export default [
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport FileUpload from \"@govtnz/ds/build/mustache/FileUpload.mustache\";\nimport FileUploadWithErrorMessage from \"@govtnz/ds/build/mustache/FileUploadWithErrorMessage.mustache\";\n\n// The variables FileUpload, FileUploadWithErrorMessage are all strings that are mustache templates.\n\nexport default `${Mustache.render(FileUpload, {})}${Mustache.render(\n  FileUploadWithErrorMessage,\n  {}\n)}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport FileUpload from \"@govtnz/ds/build/react-js/FileUpload\";\nimport \"@govtnz/ds/build/css/FileUpload.css\"; // or @govtnz/ds/build/scss/FileUpload.scss\nimport FileUploadWithErrorMessage from \"@govtnz/ds/build/react-js/FileUploadWithErrorMessage\";\nimport \"@govtnz/ds/build/css/FileUploadWithErrorMessage.css\"; // or @govtnz/ds/build/scss/FileUploadWithErrorMessage.scss\n\nexport default () => (\n  <React.Fragment>\n    <FileUpload />\n    <FileUploadWithErrorMessage />\n  </React.Fragment>\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as FileUpload from \"@govtnz/ds/build/react-ts/FileUpload\";\nimport \"@govtnz/ds/build/css/FileUpload.css\"; // or @govtnz/ds/build/scss/FileUpload.scss\nimport * as FileUploadWithErrorMessage from \"@govtnz/ds/build/react-ts/FileUploadWithErrorMessage\";\nimport \"@govtnz/ds/build/css/FileUploadWithErrorMessage.css\"; // or @govtnz/ds/build/scss/FileUploadWithErrorMessage.scss\n\nexport default () => (\n  <React.Fragment>\n    <FileUpload />\n    <FileUploadWithErrorMessage />\n  </React.Fragment>\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport FileUpload from \"@govtnz/ds/build/react-js-styled-components/FileUpload\";\nimport FileUploadWithErrorMessage from \"@govtnz/ds/build/react-js-styled-components/FileUploadWithErrorMessage\";\n\nexport default () => (\n  <React.Fragment>\n    <FileUpload />\n    <FileUploadWithErrorMessage />\n  </React.Fragment>\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as FileUpload from \"@govtnz/ds/build/react-ts-styled-components/FileUpload\";\nimport * as FileUploadWithErrorMessage from \"@govtnz/ds/build/react-ts-styled-components/FileUploadWithErrorMessage\";\n\nexport default () => (\n  <React.Fragment>\n    <FileUpload />\n    <FileUploadWithErrorMessage />\n  </React.Fragment>\n);\n",
    "vue-js": "<template>\n  <file-upload />\n  <file-upload-with-error-message />\n</template>\n<script>\nimport Vue from \"vue\";\nimport FileUpload from \"@govtnz/ds/build/vue-js/FileUpload.vue\";\nimport FileUploadWithErrorMessage from \"@govtnz/ds/build/vue-js/FileUploadWithErrorMessage.vue\";\n\nexport default {\n  components: {\n    \"file-upload\": FileUpload,\n    \"file-upload-with-error-message\": FileUploadWithErrorMessage\n  }\n};\n</script>\n",
    "vue-ts": "<template>\n  <file-upload />\n  <file-upload-with-error-message />\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport FileUpload from \"@govtnz/ds/build/vue-ts/FileUpload.vue\";\nimport FileUploadWithErrorMessage from \"@govtnz/ds/build/vue-ts/FileUploadWithErrorMessage.vue\";\n\nexport default {\n  components: {\n    \"file-upload\": FileUpload,\n    \"file-upload-with-error-message\": FileUploadWithErrorMessage\n  }\n};\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: FileUpload.css, FileUploadWithErrorMessage.css\nOR in Sass (SCSS): FileUpload.scss, FileUploadWithErrorMessage.scss\n-->\n<div class=\"g-fileUpload-form-group\">\n  <label class=\"g-fileUpload-label\"> Upload a file </label>\n  <input class=\"g-file-upload\" type=\"file\" />\n</div>\n<div\n  class=\"g-fileUploadWithErrorMessage-form-group g-fileUploadWithErrorMessage-form-group--error\"\n>\n  <label class=\"g-fileUploadWithErrorMessage-label\"> Upload a file </label>\n  <span class=\"g-fileUploadWithErrorMessage-hint\">\n    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or\n    in an app like iPhoto.\n  </span>\n  <span class=\"g-fileUploadWithErrorMessage-error-message\">\n    Error message goes here\n  </span>\n  <input\n    class=\"g-fileUploadWithErrorMessage-file-upload g-fileUploadWithErrorMessage-file-upload--error\"\n    type=\"file\"\n  />\n</div>\n",
    "css": "",
    "twig-embed": "{% embed \"FileUpload.html.twig\" %}{% endembed %}{% embed \"FileUploadWithErrorMessage.html.twig\" %}{% endembed %}"
  }
]