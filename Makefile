.PHONY: print_banner build
.SILENT:
default: all

INSTALL_DIR=./node_modules/typescript/bin/
TSC=$(INSTALL_DIR)tsc

all: clean init build test lint

build: check-version
	$(MAKE) print_banner MSG="Building Typescript Code"
	$(TSC) --build --clean
	$(TSC) --build 
	cp -rp config dist/config
	@echo Typescript Build Complete

check-version:
	@node scripts/check-version

clean:
	$(MAKE) print_banner MSG="Cleaning out Artifacts"
	@echo "\t [0/4] ...."
	@find .testcache -delete; true
	@echo "\t [1/4] x...\t.testcache"
	@find coverage -delete; true
	@echo "\t [2/4] xx..\tcoverage"
	@find dist -delete; true
	@echo "\t [3/4] xxx.\tdist"
	@find node_modules -delete; true
	@echo "\t [4/4] xxxx\tnode_modules"
	@echo Clean Complete
	rm -rf .eslintcache

cleanBuild: clean install test

depListUpdates:
	npx ncu -m --enginesNode --peer --format group --reject '@hapi/hapi','@types/hapi__hapi'

depCheck:
	npx depcheck --ignores='jest-*','ts-node','npm-check-updates','depcheck','@semantic-release/*','@commitlint/*','eslint-plugin-prettier','eslint-import-resolver-typescript'

deploy:
	$(MAKE) print_banner MSG="Running Deploy"
	@echo NO-OP

findSlowTest: build
	NODE_ENV=test npx jest --config=jest-slow.config.ts

install:
	$(MAKE) print_banner MSG="Running NPM"
	@npm ci

integrationTest: build
	$(MAKE) print_banner MSG="Running Integration Tests"
	@npx jest --testMatch=**/*.test.ts --forceExit --config int-jest.config.ts
	@echo Integration Tests Complete

init: install

lint: lintCode lintCommit

lintCode:
	$(MAKE) print_banner MSG:="Running Code Linter"
	@npx eslint . --max-warnings=0 --cache

lintCommit:
	@npx commitlint --from HEAD~1 --to HEAD --verbose

print_banner: 
	@bash ./scripts/notify.sh ${MSG} 

semantic:
	@npx semantic-release --no-ci

test: build unitTest integrationTest lint

testChanged:
	@npx jest -o --testMatch=**/*.spec.ts --coverage
	@npx jest -o --testMatch=**/*.test.ts --runInBand
	$(MAKE) lint

tdd:
	@npx jest --watch
	
unitTest: build
	$(MAKE) print_banner MSG="Running Unit Tests"
	@npx jest --testMatch=**/*.spec.ts --coverage

verify: build lint

watch-compile:
	$(TSC) --watch
