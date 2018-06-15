class Api::V1::TotalAssetsController < ApplicationController
  before_action :set_total_asset, only: [:show, :update, :destroy]

  # GET /total_assets
  # GET /total_assets.json
  def index
    @total_assets = TotalAsset.all
  end

  # GET /total_assets/1
  # GET /total_assets/1.json
  def show
  end

  # POST /total_assets
  # POST /total_assets.json
  def create
    @total_asset = TotalAsset.new(total_asset_params)

    if @total_asset.save
      render :show, status: :created, location: @total_asset
    else
      render json: @total_asset.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /total_assets/1
  # PATCH/PUT /total_assets/1.json
  def update
    if @total_asset.update(total_asset_params)
      render :show, status: :ok, location: @total_asset
    else
      render json: @total_asset.errors, status: :unprocessable_entity
    end
  end

  # DELETE /total_assets/1
  # DELETE /total_assets/1.json
  def destroy
    @total_asset.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_total_asset
      @total_asset = TotalAsset.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def total_asset_params
      params.fetch(:total_asset, {})
    end
end
