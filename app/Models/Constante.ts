import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Constante extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public poids: number

  @column()
  public temperature: number

  @column()
  public tension_arterielle: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
