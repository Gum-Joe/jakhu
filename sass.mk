# Sass Makefile

# Views directory
VIEWS_DIR ?= views
# Sass src
SASS_SRC := $(VIEWS_DIR)/src
# style
STYLE ?= expanded
# Compilers
SASS ?= sass
SCSS ?= sass
# Flags
SCSS_FLAGS ?= --style=$(STYLE)
# Ouput
OUTPUT ?= $(VIEWS_DIR)/css

%.css: $(SASS_SRC)/%.scss
	@echo "  SCSS(TARGET) "$(OUTPUT)"/"$@
	@$(SCSS) $< $(OUTPUT)/$@ $(SCSS_FLAGS)

%.min.css: $(SASS_SRC)/%.scss
	@echo "  SCSS(TARGET) "$(OUTPUT)"/"$@
	@$(SCSS) $< $(OUTPUT)/$@ --style=minimal

sass:
	$(SCSS) --update $(SASS_SRC):$(OUTPUT);
