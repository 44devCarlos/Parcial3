package com.example.Services;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


import com.example.modelos.infos;

public class CodDb {
    Connection cn;

    public CodDb(){
        cn=new Conexion().openDb();
    }

    public List<infos> obtenerDatos(){
        try {
            Statement stmt = cn.createStatement();
            String query = "SELECT * FROM info";

            List<infos> infos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);

            while (result.next()) {
                infos info = new infos(
                    result.getString("id"),
                    result.getString("descripcion")
                );

                infos.add(info);
            }

            result.close();
            stmt.close();
            return infos;

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error al obtener información");
        }
        return null;
    }
}
