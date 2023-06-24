import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'about',
})
class About extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------

  skills: string[] = ['Vuejs', 'Tailwind', 'CSS', 'Python', 'Java', 'AWS', 'TypeScript', 'Flask',
    'Attention to Detail', ' Communication', 'Problem solving'
  ]
  interest = [{ name: 'Playing football', icon: "fa-solid fa-futbol" },
  { name: 'Chess', icon: "fa-solid fa-chess" },
  { name: 'Coding', icon: "fa-solid fa-laptop" },
  { name: 'Watching TV', icon: "fa-solid fa-tv" },
  { name: 'Travel', icon: "fa-solid fa-plane" },
  ]

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // TODO: stuff to do when this component loads.
  }
}

export {
  About as default,
  About,
};
