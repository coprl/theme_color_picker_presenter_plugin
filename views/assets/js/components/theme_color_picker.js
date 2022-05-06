class ThemeColorPicker {
  constructor(component) {
    this.component = component;
    this.data = {};
    this.colorBlock = this.component.querySelector('.v-color-picker');
    this.colorInput = this.component.querySelector('.v-color-input')
    this.picker = this.createPicker();
    this.colorInput.addEventListener('change', this.colorInputHandler());
  }

  createPicker() {
    return new Picker({
      parent: this.colorBlock,
      popup: 'top',
      color: this.colorInput.value,
      editorFormat: 'hex',
      alpha: false,
      editor: true,
      onOpen: () => {
        toggleUploaderIndex("0");
      },
      onClose: () => {
        toggleUploaderIndex("1");
      },
      onChange: (color) => {
        this.colorBlock.style.backgroundColor = color.hex;
        this.colorInput.value = color.hex.slice(0,-2);
        const previewSectionId = this.component.dataset['previewSectionId'];

        if (previewSectionId) {
          const parsedPreviewVars = JSON.parse(this.component.dataset['previewVars']);
          updateColorVars(color.hex, previewSectionId, parsedPreviewVars)
        }

        this.toggleDefaultColorWarning();
      },
   });
  }

  toggleDefaultColorWarning () {
    const warningElement = document.getElementById(`default_${this.colorInput.name}_warning`);
    if (warningElement === null ) { return }

    if (this.colorInput.dataset['defaultValue'].toLowerCase() === this.colorInput.value.toLowerCase()) {
      warningElement.style.display = 'block';
    }
    else {
      warningElement.style.display = 'none';
    }
  }

  colorInputHandler () {
    const self = this;
    return function(event){
      let color = event.target.value;
      self.picker.setColor(color)
    }
  }
}

function toggleUploaderIndex(zIndex){
  const uploadElement = document.getElementsByName("upload_file");
  if (uploadElement && uploadElement[0]) {
    uploadElement[0].style.zIndex = zIndex;
  }
}

function updateColorVars(color, previewSectionId, previewVars) {
  const previewSection = document.getElementById(previewSectionId)
  previewVars.forEach( (varName) => {
    previewSection.style.setProperty('--' + varName, color);
  })
}
