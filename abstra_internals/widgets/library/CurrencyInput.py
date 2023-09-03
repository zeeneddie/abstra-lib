from ..widget_base import Input


class CurrencyInput(Input):
    type = "currency-input"
    empty_value = None

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.value = props.get("initial_value", self.empty_value)
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.placeholder = props.get("placeholder", "Insert the amount here")
        self.full_width = props.get("full_width", False)
        self.min = props.get("min")
        self.max = props.get("max")
        self.step = props.get("step")
        self.currency = props.get("currency", "USD")
        self.disabled = props.get("disabled", False)

    def render(self, context: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.serialize_value(),
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "min": self.min,
            "max": self.max,
            "step": self.step,
            "currency": self.currency,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> float:
        return self.value if self.value != None else self.empty_value