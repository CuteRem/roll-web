const app = Vue.createApp({
  data() {
    return {
      currentTheme: 'default',
      currentSection: '1',
      numberRange: { min: 0, max: 100 },
      numberResult: null,
      trueFalseResult: null,
      optionInput: '',
      options: [],
      optionResult: null,
    };
  },
  methods: {
    changeTheme(theme) {
      this.currentTheme = theme;
      document.body.setAttribute('data-theme', theme);
    },
    changeSection(section) {
      this.currentSection = section;
    },
    generateNumber() {
      const { min, max } = this.numberRange;
      this.numberResult = Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateTrueFalse() {
      this.trueFalseResult = Math.random() < 0.5;
    },
    addOption() {
      if (this.optionInput.trim()) {
        this.options.push(this.optionInput.trim());
        this.optionInput = '';
      }
    },
    clearOptions() {
      this.options = [];
    },
    selectRandomOption() {
      if (this.options.length) {
        const randomIndex = Math.floor(Math.random() * this.options.length);
        this.optionResult = this.options[randomIndex];
      }
    },
  },
}).mount('#app');
