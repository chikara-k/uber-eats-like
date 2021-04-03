Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :restaurants do
        resources :foods, only: %i[index]
        # resources :hoge, only: [:index, :create...]同様
      end
      resources :line_foods, only: %i[index create]
      put 'line_foods/replace', to: 'line_foods#replace'
      # get 'url', to:'hoge#hoge'同様
      resources :orders, only: %i[create]
    end
  end
end
