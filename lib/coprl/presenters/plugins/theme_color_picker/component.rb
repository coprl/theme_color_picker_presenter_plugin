require 'coprl/presenters/dsl/components/event_base'

module Coprl
  module Presenters
    module Plugins
      module ThemeColorPicker
        class Component < DSL::Components::EventBase
          attr_accessor :name, :value, :preview_data

          def initialize(name, **attribs, &block)
            @name = name
            @value = attribs.delete(:value){ '' }
            @preview_data = attribs.delete(:preview)
            super(type: :theme_color_picker, **attribs, &block)
            expand!
          end

        end
      end
    end
  end
end
