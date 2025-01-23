'use client';
const PdfViewer = ({ url }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Vista previa del PDF</h2>
      <iframe
        src="/doc/demo-doc.pdf"
        width="100%"
        height="800px"
        style={{ border: 'none' }}
        title="Vista previa PDF"
      ></iframe>
    </>
  );
};
export default PdfViewer;
