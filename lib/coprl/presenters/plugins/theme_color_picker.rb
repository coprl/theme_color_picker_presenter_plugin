require_relative 'theme_color_picker/component'

module Coprl
  module Presenters
    module Plugins
      module ThemeColorPicker
        module DSLComponents

          def theme_color_picker(name, **attributes, &block)
            self << ThemeColorPicker::Component.new(name, parent: self, **attributes, &block)
          end

        end

        module WebClientComponents
          def view_dir_theme_color_picker(pom)
            File.join(__dir__, '../../../..', 'views', 'components')
          end

          def render_header_theme_color_picker(pom, render:)
            render.call :erb, :theme_color_picker_header, views: view_dir_theme_color_picker(pom)
          end

          def render_theme_color_picker(comp, render:, components:, index:)
            render.call :erb, :theme_color_picker, views: view_dir_theme_color_picker(comp),
                        locals: {comp: comp,
                                 components: components,
                                 index: index}
          end

        end
      end
    end
  end
end
