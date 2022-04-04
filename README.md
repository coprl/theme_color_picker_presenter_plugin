# Color picker Presenter Plugin

A [COPRL](http://github.com/coprl/coprl) presenter plugin that provides color picker functionality.
Use Javascript library from [material-design-inspired-color-picker](https://github.com/BennyAlex/material-design-inspired-color-picker)

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'theme_color_picker_presenter_plugin', git: 'https://github.com/coprl/theme_color_picker_presenter_plugin', require: false
```

And then execute:

    $ bundle


## Usage in POMs

Declare the plugin in your pom, `plugin :theme_ color_picker`.

```ruby
Coprl::Presenters.define(:my_pom) do
  plugin :theme_color_picker
  
  content do
    theme_color_picker(:name, value: '#BBFF11')
  end
end
```
### Additional options and defaults

```
You can optionally add a preview hash that includes section and set vars. f.e.
 preview: { section: :primary_color_section, set_vars: %w(mdc-theme-primary mdc-theme-background)}

This will update the css vars in the defined section with the color returned by the picker 
```

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the COPRL project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/coprl/coprl/blob/master/CODE-OF-CONDUCT.md).
