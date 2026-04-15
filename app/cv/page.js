import CVContent from '../../components/CVContent';
export const dynamic = 'force-dynamic';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#E5DCCF]">
      <a href='/uploads/cv.pdf' className='fixed top-2 right-4 border bg-green-900 text-white px-4 py-2 rounded-sm' >Download CV</a>
      <div 
        className="pdf-content"
        style={{
          fontFamily: 'var(--font-druk-wide), Helvetica Neue, Arial, sans-serif',
          backgroundColor: '#E5DCCF',
          color: '#1f2937',
          lineHeight: '1.6'
        }}
      >
        <CVContent />
      </div>
    </div>
  );
}