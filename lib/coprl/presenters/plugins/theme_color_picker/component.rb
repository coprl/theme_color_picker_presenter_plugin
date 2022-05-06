require 'coprl/presenters/dsl/components/event_base'

module Coprl
  module Presenters
    module Plugins
      module ThemeColorPicker
        class Component < DSL::Components::EventBase
          attr_accessor :name, :value, :default, :preview_data

          def initialize(name, **attribs, &block)
            @name = name
            @value = attribs.delete(:value){ '' }
            @preview_data = attribs.delete(:preview)
            @default = attribs.delete(:default)
            super(type: :theme_color_picker, **attribs, &block)
            expand!
          end

        end
      end
    end
  end
end
