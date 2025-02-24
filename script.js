document.addEventListener('alpine:init', () => {
    Alpine.data('nameGeneratorData', () => ({
        names: ['Graham', 'Eleanor', 'Harrison', 'Clara', 'Wesley', 'Eliza', 'Grant', 'Rosalie', 'Spencer', 'Margot'],
        currentName: '',
        generateName() {
            console.log('🟢 Button clicked');
            this.currentName = this.names[Math.floor(Math.random() * this.names.length)];
            console.log('✅ Generated Name:', this.currentName);
        }
    }));
});
