import SectionWrapper from './SectionWrapper';
import SectionCore from './SectionCore';

function Section({ section, sectionIndex }) {
  return (
    <SectionWrapper
      sectionIndex={sectionIndex}
      backgroundImg={section.background_img_url}
    >
      <SectionCore section={section} sectionIndex={sectionIndex} />
    </SectionWrapper>
  );
}

export default Section;
