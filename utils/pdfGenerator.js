export const generateCVPDF = async () => {
  try {
    const html2pdf = (await import('html2pdf.js')).default;
    
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.style.top = '0';
    iframe.style.width = '800px';
    iframe.style.height = '1000px';
    document.body.appendChild(iframe);
    
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Chad Resume CV</title>
      </head>
      <body style="background-color: #E5DCCF; color: black; padding: 30px; font-family: Arial, sans-serif; font-size: 13px; line-height: 1.4; margin: 0;">
        
        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">FILM & TELEVISION</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Cleverman</span> : S2 Episode 6, Supporting role - ABC Television, Production dir. Wayne Blair</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Deadly Women</span> : S5 6 & 7, Lead & Supporting roles - Beyond Productions, dir. James Knoxs</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Behind Mansion Walls</span> : S1 2 & 3, Lead & Supporting roles - Behind Mansion Walls, Beyond Productions, dir. James Knoxs</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">The Navigator</span>, Supporting role - Feature Film, Arya Productions, dir. Eddie Arya</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Crownies</span> : S1 Episodes 11 & 12, Supporting role - ABC Television Production, dir. Garth Maxwell</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Satisfaction</span> : S1 Episode 9, Supporting role - Fox Network Production, dir. Mike Clattenburg</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">The Wedge</span> : S2 Episode 6, Supporting role - Southern Star Productions, dir. Nicholas Buffalo</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">The Librarians</span> : S1 Episode 2, Supporting role - The Librarians ABC Television production, dir. Wayne Hope</li>
        </ul>

        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">VERTICAL SERIES & FILM</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Mafia Mama's Hot Lover</span> - Supporting role - Jack, HJS, dir. Kiki Huang</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">My Lost Daughter</span> - Supporting role - Bobby, HJS, dir. Albert Xu</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Return Of The Heiress</span> - Supporting role - Cameron, HJS, dir. Celeste Diep</li>
        </ul>

        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">TV COMMERCIALS</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">RSPCA Pet Insurance</span> - Support male role - Dog owner, Aired 2024, dir. Andrew Garrick</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">OzCar Australia</span> - Lead male role - Car salesman, Aired 2024/25, dir. John Kohlenberg</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Monkey Undies</span> - Lead male role - Underwear model, Aired 2024, dir. Bruce Goldberg</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Engel Since 1962</span> - Lead male role - Young husband, Aired 2024, dir. Joshua H. Walker</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">BMW South Coast</span> - Lead male role - New car owner, Aired 2024, dir. Luc La Rossa</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Genpower SV5000 Generator</span> - Lead male role - Presenter, Aired 2023, dir. Philip Hudson</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Centrums for kids</span> - Lead male role - Young Husband, Aired in China 2022, dir. Nigel Li</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">ING Banking</span> - Lead male role - Lifestyle model, Aired 2018, dir. James Goodwin</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Chemist Warehouse Healthy breaks TVC</span> - Supporting male role - Young Husband, Aired 2015, dir. Harvey Silver</li>
        </ul>

        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">PRESENTING & HOSTING</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">OpenShop Shopping Network</span> - Lead LIVE TV Presenter - Sydney, Channel 75, 7 Network, dir. Michael Poulos</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Bent Television & 94.9JoyFM</span> - Lead TV Presenter & Reporter - Melbourne, dir. Gavin Henderson</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Outlook TV & Out TV Canada</span> - Lead TV Reporter & Host – Shaw Network, Vancouver, dir. Michael Keeping</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">94.9JoyFM & Bent Television</span> - Lead Radio Presenter & Co-Host – JOY 94.9FM, Melbourne, dir. Jason Gipps</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">CJSF 90.1 FM Canada</span> - Lead Radio Presenter & Host - CJSF Radio network, Vancouver, dir. Robin Erksson</li>
        </ul>

        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">THEATRE & STAGE</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Mayhem in Milan</span> - Lead male role - Jacque, Melbourne Fringe Festival, dir. Christina Gaulchie</li>
        </ul>

        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">MEDIA & PRINT</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Car Australia</span> - National launch, Lead male role - Online Advertising, Released 2024/25, dir. Madeline Press</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Fratelli Fresh</span> - EOY & Fathers Day, Lead male role - Online Advertising, Released 2025, dir. Ane Alberdie</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Destination NSW</span> - Illawarra Fly & Tree Climb, Featured male role - Online Advertising, Released 2025 NSW Government Campaign, dir. Nick Mutton</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Luxaflex & Qantas Points Partnership</span> - Lead male role - Online Advertising, Released 2024, dir. Paul Powers</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Purple Flag Sydney</span> - Lead male role – Online Advertising, Released 2024 NSW Government Campaign, dir. Karan Bawa</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Gore Medical international</span> - Featured male role - USA Online Advertising, Released 2024, dir. Graham Jepson</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Benedict Recycling</span> - Lead male role - Online Advertising, Released 2024/25, dir. Jonathan R Chen</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Pool & Spa Warehouse</span> - Lead male role - Online Advertising, Released 2024, dir. Dave Collins</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">DiDi Car Ride</span> - Lead male role - Online Advertising, Released 2021/22, dir. Matt Bentfeild</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Cancer Council Apparel</span> - Lead male role - Online Advertising, Released 2018/19, dir. Stephen Phillips</li>
        </ul>

        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">STUDIO V/O & AUDIO</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Troppo</span> - Loop Group / voice over role - ABC Television production, Evolution Post, Troppo series 2, Dir. Micheal Whitfield</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Unique Adventures Nepal</span> - Lead TV Presenter & V/O - Presenter role, Visit Nepal 2020</li>
        </ul>

        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">PROFESSIONAL SKILLS</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Dialects & Accents</span> – Standard American, Native Australian, British and Irish</li>
          <li style="margin-bottom: 3px;">Screen & Stage Acting | Commercial Lifestyle, Fitness & Corporate Talent</li>
          <li style="margin-bottom: 3px;">Modelling – Corporate Lifestyle, Fitness, Portrait and Catwalk</li>
          <li style="margin-bottom: 3px;">Stage TV & Radio Presenting | Voiceover Diverse & Creative Artist</li>
          <li style="margin-bottom: 3px;">Dance & Physical Performance | Singing vocal styles: pop, rock & r&b</li>
        </ul>

        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">STUDY & TRAINING</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">NIDA Sydney, Australia</span> - 1 year Foundations Course, On Script reading, Audition preparation, Performing for film & television</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">VCA Melbourne, Australia</span> - 2 year Foundations Course, On style, delivery & performance in film and television</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">RADA England, London</span> - Stage performance, Film production & Script Workshops</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">TAFTA Sydney, Australia</span> - Audition preparation, Audition Intensive & Screen Acting</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Actors Centre Sydney, Australia</span> - Comedy foundations & Screen Technique</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Rogues West Vancouver Canada</span> - Sanford Meisner Technique workshop</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Sydney Drama School</span> - Scene and Script workshops for film & television</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Scene on Screen Sydney, Australia</span> - Fox Studios Drop in, On-Camera Workshops</li>
        </ul>

        <h1 style="color: #0B3D2E; font-size: 24px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; text-transform: uppercase;">ONE ON ONE COACHING</h1>
        <ul style="margin-left: 25px; margin-bottom: 15px;">
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">John Sahmarha</span> - Sydney Australia - Acting and voice coach for screen, Film & television.</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Trish Allen</span> - Vancouver, Canada - Dialect, Accent approach. Pronunciation & dialect training.</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Christiane Hirt</span> - Vancouver, Canada - Acting & voice coach for screen.</li>
          <li style="margin-bottom: 3px;"><span style="color: #0B3D2E; font-weight: bold;">Joyce Simmons</span> - Singing & Vocal training coach. Voice control, Style & delivery of sound performance.</li>
        </ul>

      </body>
      </html>
    `;
    
    iframeDoc.open();
    iframeDoc.write(htmlContent);
    iframeDoc.close();
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const options = {
      margin: 0.5,
      filename: 'Chad_Resume_CV.pdf',
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { 
        scale: 1.5,
        useCORS: true,
        backgroundColor: '#E5DCCF'
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait'
      }
    };

    const element = iframeDoc.body;
    await html2pdf().set(options).from(element).save();
    
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe);
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Error generating PDF. Please try again.');
  }
};