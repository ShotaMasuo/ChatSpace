Rails.application.routes.draw do
  devise_for :users
  resources :users, only:[:index, :edit, :update]
  resources :groups, only:[:index, :new, :create, :edit, :update] do
    resources :chats, only:[:index, :create]
    namespace :api do
      resources :chats, only: :index, defaults: {format: 'json'}
    end
  end
  root "groups#index"
end
