import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      // NOTE: next/font 는 사용하지 않으면 제거
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        roboto: ['var(--font-roboto)'],
        notoSansKr: ['var(--font-notoSansKr)'],
      },
      screens: {
        desktop: '768px',
        desktopMaxW: '1440px',
      },
      backgroundImage: {
        'evaluation-gradient': 'linear-gradient(90deg, #FFA3A3 0%, #FFCB96 35.5%, #FFE49D 65.5%, #77D276 99%',
      },

      fontSize: {
        h1: [
          '48px',
          {
            lineHeight: '48px',
            fontWeight: '700',
          },
        ],
        h2: [
          '27px',
          {
            lineHeight: '35px',
            fontWeight: '700',
          },
        ],
        h3: [
          '24px',
          {
            lineHeight: '36px',
            fontWeight: '700',
          },
        ],
        h4: [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: '700',
          },
        ],
        body1: [
          '17px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        body2: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '500',
          },
        ],
        body3: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '700',
          },
        ],
        body4: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '500',
          },
        ],
        body5: [
          '11px',
          {
            lineHeight: '18px',
            fontWeight: '600',
          },
        ],
        overline: [
          '12px',
          {
            lineHeight: '18px',
            fontWeight: '500',
          },
        ],
        caption: [
          '10px',
          {
            lineHeight: '18px',
            fontWeight: '500',
          },
        ],
      },
      colors: {
        primary: '#2563eb',
        background: '#f2f5fc',
        'background-modal': '#111827',
        'vontainer-bg': '#ffffff',
        'header-bg': '#ffffff',
        stroke: '#d1d5db',
        'text-disabled': '#d1d5db',
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        'icon-bg': '#f2f6ff',
        'primary-management': '#77d276',
        'secondary-management': '#cdf4cd',
        'primay-claim': '#ffb775',
        'secondary-claim': '#fff0d0',
        'primay-facility': '#2563eb',
        'secondary-facility': '#e6eeff',
        'primary-rent': '#2563eb',
        'primary-contract': '#67e8f9',
        'primary-empty': '#ffb775',
        'progress-bar-step1': '#ffa3a3',
        'progress-bar-step2': '#ffe49d',
        'progress-bar-step3': '#22c55d',
        'primary-badge-new': '#dc2626',
        'green-50': '#F2FFF2',
        'green-300': '#CDF4CD',
        'green-500': '#22C55D',
        'purple-50': '#FAF5FF',
        'purple-100': '#f3e8ff',
        'purple-400': '#c084fc',
        'cyan-50': '#ECFEFF',
        'cyan-300': '#67E8F9',
        'cyan-400': '#22D3EE',
        'orange-50': '#FFF0D0',
        'orange-300': '#FFB775',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        container: '20px',
        'desktop-stroke': '10px',
        'mobile-graph': '10px',
        'mobile-stroke': '8px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        card: '20px',
        base: '10px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
} satisfies Config;

export default config;
