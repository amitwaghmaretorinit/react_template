import React, { FC } from "react";
import styled from "styled-components";

export const H1Typography = styled.h1`
  font-size: 30px;
  line-height: 38px;
  font-weight: 600;
  font-family: Poppins;
  font-stretch: normal;
  font-style: normal;
  margin: 0;
`;

export const H2Typography = styled.h2`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  font-family: Poppins;
  font-stretch: normal;
  font-style: normal;
  margin: 0;
`;

export const H3Typography = styled.h3`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  font-family: Poppins;
  font-stretch: normal;
  font-style: normal;
  margin: 0;
  &.space-bottom-16{
    margin-bottom:var(--spacing-4)
  }
`;
export const H4Typography = styled.h4`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Poppins;
  font-stretch: normal;
  font-style: normal;
  margin: 0;
`;

export const H5Typography = styled.h5`
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  font-family: Poppins;
  font-stretch: normal;
  font-style: normal;
  span{
    color:red;
  }
`;

export const H6Typography = styled.h6`
  font-size: 12px;
  font-weight: 600;
  font-family: Poppins;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const TypoSubtitleSubtitle1 = styled.p`
font-family: Poppins;
font-size: 16px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.5;
letter-spacing: normal;
color: var(--color-system-gray-gray-7);
  `;

export const TypoSubtitleSubtitle2 = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  &.grayColor{
    color: var(--color-system-gray-gray-7);
  }
  `;

  export const TypoBodyBody1 = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  &.colorGray{
    color: var(--color-system-gray-gray-7);
  }

  `;
  export const TypoCaption = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  `;
  export const TypoBodyBody2  = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  margin: 0;
  color: var(--color-system-gray-gray-10);
  `;

  export const ValueWrapper = styled.div`
  font-size: 14px !important;
  line-height: 22px;
  color: #17082d;
  font-family: Poppins;
  font-weight:400;
  margin-bottom:10px;
  word-break: break-all;
  margin-bottom:var(--spacing-5);
`;
export const FormLableTypography = styled.label`
font-family: Poppins;
font-size: 14px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.57;
letter-spacing: normal;
text-align: left;
color: var(--color-system-gray-gray-10);
word-break: break-all;
span{
  color:red;
}
&.spaceBottom-16{
  margin-bottom:var(--spacing-4)
}
`;

interface TypographyProps {
  text?: string | JSX.Element;
  className?: string;
  dataTestid?: any;
  style?: React.CSSProperties;
  mandatoryIcon?: any;
  onClick?: () => void
}

export const H1: FC<TypographyProps> = ({ text, style, className }) => {
  return (
    <H1Typography style={style} className={className} data-testid="H1-test">
      {text}
    </H1Typography>
  );
};

export const H2: FC<TypographyProps> = ({ text, className, style }) => {
  return (
    <H2Typography style={style} className={className} data-testid="H2-test">
      {text}
    </H2Typography>
  );
};

export const H3: FC<TypographyProps> = ({text,className,style,mandatoryIcon,}) => {
  return (
    <H3Typography style={style} className={className} data-testid="H3-test">
      {text} <span className="iconmark" style={{color:"red"}}>{mandatoryIcon}</span>
    </H3Typography>
  );
};
export const H4: FC<TypographyProps> = ({ text, onClick, className, style }) => {
  return (
    <H4Typography onClick={onClick} style={style} className={className} data-testid="H4-test">
      {text}
    </H4Typography>
  );
};

export const H5: FC<TypographyProps> = ({ text, className , style}) => {
  return (
    <H5Typography className={className} style={style} data-testid="H5-test">
      {text}
    </H5Typography>
  );
};

export const H6: FC<TypographyProps> = ({ text, className ,style}) => {
  return (
    <H6Typography className={className} style={style} data-testid="H5-test">
      {text}
    </H6Typography>
  );
};

export const SubTitle1: FC<TypographyProps> = ({ text, className ,style}) => {
  return (
    <TypoSubtitleSubtitle1 className={className} style={style} data-testid="H5-test">
      {text}
    </TypoSubtitleSubtitle1>
  );
};

export const SubTitle2: FC<TypographyProps> = ({ text, className ,style}) => {
  return (
    <TypoSubtitleSubtitle2 className={className} style={style} data-testid="H5-test">
      {text}
    </TypoSubtitleSubtitle2>
  );
};

export const BodyText1: FC<TypographyProps> = ({ text, className ,style}) => {
  return (
    <TypoBodyBody1 className={className} style={style} data-testid="H5-test">
      {text}
    </TypoBodyBody1>
  );
};

export const BodyText2: FC<TypographyProps> = ({ text, className ,style}) => {
  return (
    <TypoBodyBody2 className={className} style={style} data-testid="H5-test">
      {text}
    </TypoBodyBody2>
  );
};

export const Caption: FC<TypographyProps> = ({ text, className ,style}) => {
  return (
    <TypoCaption className={className} style={style} data-testid="H5-test">
      {text}
    </TypoCaption>
  );
};


export const Value = (props: { children: React.ReactNode }) => {
  return !!props.children ? <ValueWrapper>{props.children}</ValueWrapper> :<span>-</span>
 }


