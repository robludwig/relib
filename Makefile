test:
	./node_modules/.bin/mocha --reporter list

cov test-cov:
	./node_modules/.bin/istanbul cover _mocha -- --reporter dot

test-travis:
	./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha --report lcovonly -- --reporter dot

.PHONY: test cov test-cov test-travis
