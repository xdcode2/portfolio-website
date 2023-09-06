class Theme {
    constructor(initTheme = "light") {
        this.initTheme = initTheme;
        this.onToggleCallback = null;
        this.onLoadCallback = null;
        window.addEventListener("DOMContentLoaded", () => {
            if (this.onLoadCallback) {
                this.onLoadCallback();
            }
        });
    }
    set currentTheme(newTheme) {
        window.__theme = newTheme;
    }
    get currentTheme() {
        return window.__theme;
    }

    /**
     *
     * @returns {string} the current theme from localStorage
     */
    static getTheme() {
        return localStorage.getItem("theme-color");
    }
    /**
     * This function will switch the current theme to new theme in localStorage
     * @param {string} theme
     */
    static setTheme(theme) {
        localStorage.setItem("theme-color", theme);
    }
    /**
     * This function will run only once time if the theme color is equal to the null
     */
    init() {
        this.currentTheme = Theme.getTheme();
        if (this.currentTheme == null) {
            this.toggleTo(this.initTheme);
            return;
        }
        this.loadTheme();
    }
    toggleTo(newTheme) {
        this.currentTheme = newTheme;
        this.loadTheme();
    }
    toggleTheme() {
        if (this.currentTheme === "light") {
            this.toggleTo("dark");
        } else if (this.currentTheme === "dark") {
            this.toggleTo("light");
        }
    }
    onToggle(callback) {
        this.onToggleCallback = callback;
    }
    onLoad(callback) {
        this.onLoadCallback = callback;
    }
    loadTheme() {
        document.documentElement.setAttribute("data-theme", this.currentTheme);
        Theme.setTheme(this.currentTheme);
        if (this.onToggleCallback) {
            this.onToggleCallback();
        }
    }
    destroy() {
        localStorage.removeItem("theme-color");
        document.documentElement.removeAttribute("data-theme");
        delete window.__theme;
    }
}
