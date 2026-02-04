const items = [
  {
    year: '2025',
    projects: [
      {
        title: 'Adaptive LoRA caching for LLM serving',
        description: 'Adding a GPU side cache to maximise efficiency is multi-tenant LLM serving scenarios.',
        github: '',
        report: '/static/pdfs/lora_caching_report.pdf',
        tags: ['PEFT', 'LoRA', 'S-LoRA', 'Chameleon', 'LLM inference', 'Caching'],
        image: null // future-proof
      },
      {
        title: 'MatchOpt',
        description: 'The first open-source real-time matchmaking middleware EOMM.',
        github: 'https://github.com/heemmanshuu/thamm',
        report: '/static/pdfs/matchopt_eomm_report.pdf',
        tags: ['Kafka', 'Flink', 'Distributed Systems', 'Java'],
        image: null // future-proof
      },
      {
        title: 'LLMSecConfig Audit',
        description: 'Security audit of LLM-based Kubernetes misconfiguration remediation.',
        github: 'https://github.com/heemmanshuu/Audit_LLM_SecConFig',
        report: '/static/pdfs/llmsecconfig_report.pdf', // hosting PDF locally is 💯 better long-term
        tags: ['LLMs', 'Security', 'Kubernetes'],
        image: null
      },
      {
        title: 'DiTTo',
        description: 'Improving latency of HuggingFace Search-and-Learn framework for test time compute scaling.',
        github: 'https://github.com/rajlm10/dist_test_time_compute_scaling',
        report: '/static/pdfs/ditto_report.pdf',
        tags: ['PyTorch', 'Fault-tolerance', 'LLM inference'],
        image: null // future-proof
      },
      {
        title: 'Reimplenting VAEs from scratch',
        description: 'Analysis of the original VAE paper by Kingma and Welling with latent space representation and analysis.',
        report: '/static/pdfs/vae_report.pdf',
        tags: [],
        image: null // future-proof
      },
    ]
  },
  {
    year: 'Previous (non-exhaustive)',
    projects: [
      {
        title: 'Image Splicing Detection',
        description: 'Exposing image slicing by detecting inconsistencies in local noise variances.',
        github: 'https://github.com/heemmanshuu/Image-Splicing-Detector',
        report: '/static/pdfs/image_splicing_report.pdf',
        tags: ['Image Processing'],
        image: null // future-proof
      },
      {
        title: 'RedPlag',
        description: 'A web based plagiarism checker with user authentication.',
        github: 'https://github.com/heemmanshuu/RedPlag',
        tags: ['Bag of words', 'TF-IDF', 'Django', 'Latent Semantic Analysis'],
        image: null // future-proof
      },
      // {
      //   title: '',
      //   description: '',
      //   github: '',
      //   report: '/static/pdfs/',
      //   tags: [],
      //   image: null // future-proof
      // },
      
    ]
  }
];

export default items;

// const items = [
//   {
//     year: '2023 — Present',
//     projects: [
//       {
//         title: 'Resend',
//         description: 'Email for developers',
//         url: 'https://resend.com',
//         active: true,
//         icon: 'resend',
//         stats: '1M+ users'
//       }
//     ]
//   },
//   {
//     year: '2022',
//     projects: [
//       {
//         title: 'React Email',
//         description: 'Next generation of writing emails',
//         url: 'https://react.email',
//         active: true,
//         icon: 'email',
//         stats: '1M+ downloads'
//       },
//       {
//         title: 'WorkOS',
//         url: 'https://workos.com',
//         active: true
//       }
//     ]
//   },
//   {
//     year: '2021',
//     projects: [
//       {
//         title: 'Awesome Developer Experience',
//         url: 'https://github.com/workos-inc/awesome-developer-experience',
//         active: true
//       },
//       {
//         title: 'ByteTalk',
//         url: 'https://www.youtube.com/@bytetalkpodcast846',
//         active: true
//       },
//       {
//         title: 'Dracula UI',
//         url: 'https://draculatheme.com/ui'
//       }
//     ]
//   },
//   {
//     year: '2020',
//     projects: [
//       {
//         title: '14 Habits',
//         description: 'Book about productivity',
//         url: 'https://14habits.com'
//       },
//       {
//         title: 'Dracula PRO',
//         description: 'Premium dark color scheme',
//         url: 'https://draculatheme.com/pro'
//       }
//     ]
//   },
//   {
//     year: '2019',
//     projects: [
//       {
//         title: 'LeCheese',
//         url: 'https://lecheese.app',
//         active: true
//       }
//     ]
//   },
//   {
//     year: '2018',
//     projects: [
//       {
//         title: 'Liferay DXP Cloud',
//         url: 'https://www.liferay.com/products/dxp-cloud',
//         active: true
//       }
//     ]
//   },
//   {
//     year: '2017',
//     projects: [
//       {
//         title: 'Liferay Community',
//         url: 'https://community.liferay.com/',
//         active: true
//       },
//       {
//         title: 'CodeCopy',
//         url: 'https://chrome.google.com/webstore/detail/codecopy/fkbfebkcoelajmhanocgppanfoojcdmg',
//         active: true
//       }
//     ]
//   },
//   {
//     year: '2016',
//     projects: [
//       {
//         title: 'WeDeploy',
//         url: 'http://wedeploy.com',
//         active: false
//       },
//       {
//         title: 'Browser Calories',
//         url: 'http://browserdiet.com/calories',
//         active: true
//       },
//       {
//         title: 'DevSpace',
//         url: 'http://devspace.io',
//         active: false
//       }
//     ]
//   },
//   {
//     year: '2015',
//     projects: [
//       {
//         title: 'Clipboard.js',
//         description: 'Library to copy text to clipboard',
//         url: 'http://clipboardjs.com/',
//         icon: 'clipboard-js',
//         stats: '34k+ stars',
//         active: true
//       },
//       {
//         title: 'Select',
//         url: 'https://www.npmjs.com/package/select',
//         active: true
//       },
//       {
//         title: 'Delegate',
//         url: 'https://www.npmjs.com/package/delegate',
//         active: true
//       },
//       {
//         title: 'Good Listener',
//         url: 'https://www.npmjs.com/package/good-listener',
//         active: true
//       },
//       {
//         title: 'Launchpad',
//         url: 'http://liferay.io/',
//         active: false
//       },
//       {
//         title: 'Metal.js',
//         url: 'http://metaljs.com/',
//         active: true
//       }
//     ]
//   },
//   {
//     year: '2014',
//     projects: [
//       {
//         title: 'Senna',
//         url: 'http://sennajs.com',
//         active: true
//       },
//       {
//         title: 'trackingjs.com',
//         url: 'http://trackingjs.com/',
//         active: true
//       },
//       {
//         title: 'Voice Elements',
//         url: 'https://github.com/zenorocha/voice-elements',
//         active: true
//       },
//       {
//         title: 'JavaScript & NodeJS Snippets for Atom',
//         url: 'https://github.com/zenorocha/atom-javascript-snippets',
//         active: true
//       },
//       {
//         title: 'Web Components - Chrome Extension',
//         url: 'https://chrome.google.com/webstore/detail/web-components/filcobblndaenakhejinpjdblekilpgn',
//         active: true
//       },
//       {
//         title: 'WebComponents.org',
//         url: 'http://webcomponents.org',
//         active: true
//       },
//       {
//         title: 'Generator Element',
//         url: 'https://github.com/webcomponents/generator-element',
//         active: false
//       },
//       {
//         title: 'Hello World Element',
//         url: 'https://github.com/webcomponents/hello-world-element',
//         active: false
//       },
//       {
//         title: 'Hello World X-Tag',
//         url: 'https://github.com/webcomponents/hello-world-xtag',
//         active: false
//       },
//       {
//         title: 'Hello World Polymer',
//         url: 'https://github.com/webcomponents/hello-world-polymer',
//         active: false
//       },
//       {
//         title: 'Element Boilerplate',
//         url: 'https://github.com/webcomponents/element-boilerplate',
//         active: false
//       },
//       {
//         title: 'X-Tag Boilerplate',
//         url: 'https://github.com/webcomponents/x-tag-boilerplate',
//         active: false
//       },
//       {
//         title: 'Polymer Boilerplate',
//         url: 'https://github.com/webcomponents/polymer-boilerplate',
//         active: false
//       }
//     ]
//   },
//   {
//     year: '2013',
//     projects: [
//       {
//         title: 'JavaScript & NodeJS Snippets for Atom',
//         url: 'https://atom.io/packages/javascript-snippets',
//         active: true
//       },
//       {
//         title: 'Dracula',
//         description: 'One dark theme for all platforms',
//         url: 'https://draculatheme.com',
//         active: true,
//         icon: 'dracula-pro',
//         stats: '9M+ users'
//       },
//       {
//         title: 'Workflow Collection for Alfred App',
//         url: 'https://github.com/zenorocha/alfred-workflows',
//         active: true
//       },
//       {
//         title: 'Custom Elements',
//         url: 'http://customelements.io/',
//         active: false
//       },
//       {
//         title: 'JavaScript & NodeJS Snippets for Sublime Text',
//         url: 'https://sublime.wbond.net/packages/JavaScript%20&%20NodeJS%20Snippets',
//         active: true
//       },
//       {
//         title: 'NodeGH',
//         url: 'http://nodegh.io/',
//         active: false
//       },
//       {
//         title: 'Yeoman Generator for FirefoxOS',
//         url: 'https://github.com/zenorocha/generator-firefox-os',
//         active: true
//       },
//       {
//         title: 'Browser Diet',
//         url: 'http://browserdiet.com/',
//         active: true
//       },
//       {
//         title: 'Sobrinho Manifesto',
//         url: 'http://sobrinhomanifesto.com.br/',
//         active: false
//       },
//       {
//         title: 'alloyui.com',
//         url: 'http://alloyui.com/',
//         active: true
//       },
//       {
//         title: 'jQuery Github',
//         url: 'http://zenorocha.github.com/jquery-github/',
//         active: false
//       }
//     ]
//   },
//   {
//     year: '2012',
//     projects: [
//       {
//         title: 'Conf Boilerplate',
//         url: 'http://confboilerplate.com/',
//         active: false
//       },
//       {
//         title: 'Old Radio',
//         url: 'http://bernarddeluna.github.io/oldRadio/',
//         active: true
//       },
//       {
//         title: 'Linha do tempo do Brasileirão',
//         url: 'http://estatico.globoesporte.globo.com/linha-do-tempo/',
//         active: true
//       },
//       {
//         title: 'Santos pelo Mundo',
//         url: 'http://estatico.globoesporte.globo.com/santos-pelo-mundo/',
//         active: true
//       },
//       {
//         title: 'Santos 100 anos',
//         url: 'http://estatico.globoesporte.globo.com/santos-em-10-decadas/',
//         active: true
//       }
//     ]
//   },
//   {
//     year: '2011',
//     projects: [
//       {
//         title: 'Messi vs Neymar',
//         url: 'http://globoesporte.globo.com/futebol/mundial-de-clubes/messi-vs-neymar.html',
//         active: true
//       },
//       {
//         title: 'Corinthians',
//         url: 'http://globoesporte.globo.com/futebol/times/corinthians/timaocampeao.html',
//         active: true
//       },
//       {
//         title: 'Dive into HTML5',
//         url: 'http://diveintohtml5.com.br/',
//         active: true
//       },
//       {
//         title: 'Wormz',
//         url: 'https://experiments.withgoogle.com/wormz',
//         active: true
//       },
//       {
//         title: 'jQuery Boilerplate',
//         url: 'http://jqueryboilerplate.com/',
//         active: false
//       },
//       {
//         title: 'BeerBlogging',
//         url: 'http://beerblogging.org/',
//         active: false
//       },
//       {
//         title: 'Shop 126 - Winter 2011',
//         url: '',
//         active: false
//       }
//     ]
//   },
//   {
//     year: '2010',
//     projects: [
//       {
//         title: 'Grão Arquitetura',
//         url: 'http://www.grao.arq.br/',
//         active: true
//       },
//       {
//         title: 'Guerra e Paz',
//         url: 'http://www.guerraepaz.org.br/',
//         active: true
//       },
//       {
//         title: 'Safari Recrutamento',
//         url: 'http://safarirecrutamento.com.br/',
//         active: false
//       },
//       {
//         title: 'Coordenadas Cariocas',
//         url: 'http://www.coordenadascariocas.com.br/',
//         active: true
//       },
//       {
//         title: 'Nuts4Nuts',
//         url: 'http://nuts4nuts.co.uk/',
//         active: false
//       },
//       {
//         title: 'Rennato',
//         url: '',
//         active: false
//       },
//       {
//         title: 'Shop 126 - Summer 2011',
//         url: '',
//         active: false
//       },
//       {
//         title: 'Parque da Liberdade',
//         url: '',
//         active: false
//       },
//       {
//         title: 'Marília Misailidis',
//         url: 'http://www.mariliamisailidis.com.br/',
//         active: false
//       },
//       {
//         title: 'Rodrigo de Castro',
//         url: '',
//         active: false
//       },
//       {
//         title: 'Rico Lins',
//         url: 'http://www.ricolins.com/',
//         active: true
//       },
//       {
//         title: 'Tainá 3',
//         url: 'http://taina3.com.br/',
//         active: true
//       },
//       {
//         title: 'Shop 126 - Winter 2010',
//         url: '',
//         active: false
//       },
//       {
//         title: 'Mosaico Mantiqueira',
//         url: 'http://www.mosaicomantiqueira.org.br/',
//         active: false
//       }
//     ]
//   },
//   {
//     year: '2009',
//     projects: [
//       {
//         title: 'Brasil tem jeito',
//         url: 'http://brasiltemjeito.org/',
//         active: false
//       },
//       {
//         title: 'Antonia Rodrigues',
//         url: 'http://www.antoniarodrigues.com.br/',
//         active: false
//       }
//     ]
//   }
// ];

// export default items;
