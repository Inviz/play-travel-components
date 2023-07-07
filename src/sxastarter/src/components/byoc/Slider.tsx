'use client';
import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export interface ExampleSchema {
  title?: string;
  logos?: {
    src: string;
    url?: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
const CustomRightArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={() => onClick()}
      style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%) translateY(-5px)',
        width: '32px',
        height: '32px',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        userSelect: 'none',
      }}
    >
      <span style={{ marginRight: '-4px' }}>▶</span>
    </button>
  );
};

const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={() => onClick()}
      className="-button"
      style={{
        position: 'absolute',
        left: 0,
        transform: 'translateY(-50%) translateY(-5px)',
        top: '50%',
        width: '32px',
        height: '32px',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        userSelect: 'none',
      }}
    >
      <span style={{ marginLeft: '02' }}>◀</span>
    </button>
  );
};

export default function LogoSlider({
  title,
  logos,
}: {
  title?: string;
  logos: {
    src: string;
    url?: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3100, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="-card">
      <h4>{title}</h4>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        ssr={false}
        infinite={true}
        showDots={false}
        customRightArrow={
          /* @ts-ignore */
          <CustomRightArrow />
        }
        customLeftArrow={
          /* @ts-ignore */
          <CustomLeftArrow />
        }
      >
        {logos.map((logo, index) => {
          return (
            <div key={index} style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
              <a href={logo.url}>
                <img src={logo.src} alt="" />
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export { LogoSlider };

FEAAS.registerComponent(LogoSlider, {
  name: 'Logo Slider',
  group: 'Widgets',
  properties: {
    title: {
      type: 'string',
      title: 'Task list title',
    },
    logos: {
      type: 'array',
      title: 'List of logos',
      items: {
        type: 'object',
        required: ['src'],
        properties: {
          src: {
            type: 'string',
            title: 'Logo URL',
          },
          url: {
            type: 'string',
            title: 'Link URL',
          },
        },
      },
    },
  },
  ui: {
    logos: {
      title: 'a',
      items: {
        src: {
          'ui:options': {
            inputType: 'url',
          },
        },
        url: {
          'ui:options': {
            inputType: 'url',
          },
        },
      },
    },
  },
});
