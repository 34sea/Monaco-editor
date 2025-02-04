
// Configurar o loader do Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.1/min/vs' } });

require(['vs/editor/editor.main'], function () {
  // Criar uma instância do Monaco Editor
  const editor = monaco.editor.create(document.getElementById('editor-container'), {
    value: `<!DOCTYPE html>
<html>
<head>
  <title>Exemplo Monaco Editor</title>
  <style>
    body { font-family: Arial, sans-serif; }
  </style>
</head>
<body>
  <h1>Olá, Monaco Editor!</h1>
  <script>
    console.log('Bem-vindo ao Monaco Editor!');
  </script>
</body>
</html>`,
    language: 'html',
    theme: 'vs-dark',
    automaticLayout: true
  });
});
