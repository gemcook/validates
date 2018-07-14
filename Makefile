clean:
	rm -rf ./lib/

build-umd:
	NODE_PATH=$(shell which node) \
	NODE_ENV=production \
	BABEL_ENV=production \
	yarn run build:umd

prepublish:
	$(MAKE) clean

	$(MAKE) build-umd

	cp -f ./flow-typed/index.js.flow ./lib/index.js.flow

flow-gen:
	yarn build:flow-gen

publish:
	yarn publish --access public
