source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '>= 2.4.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.0'
# Use sqlite3 as the database for Active Record
# Use Puma as the app server
gem 'pg', '>= 0.18', '< 2.0'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Shumai selcted gems
gem 'devise', '~> 4.6'
gem 'foreman'
gem 'jwt'
gem 'react-rails'
#gem 'multi_json', '~> 1.13', '>= 1.13.1'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors', require: 'rack/cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'shoulda-matchers', '~> 3.1', '>= 3.1.2'
  gem 'rspec-rails', '~> 3.7'
  gem 'factory_bot_rails', '~> 4.10'
  gem 'faker', :git => 'https://github.com/stympy/faker.git', :branch => 'master'
end

group :test do
  gem 'capybara', '~> 3.2'
  gem 'database_cleaner', '~> 1.7'
  gem 'cucumber', '~> 3.1'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
  gem 'simplecov', require: false
end


group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
